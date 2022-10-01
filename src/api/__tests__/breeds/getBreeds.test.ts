import { renderHook, waitFor } from '@testing-library/react-native';
import { rest } from 'msw';

import { useTestBreeds } from 'api';
import { createWrapper, server } from 'tests';

describe('useBreeds()', () => {
  test('Returns cat data successfully', async () => {
    const { result } = renderHook(() => useTestBreeds(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data?.[0].weight).toBeDefined();
  });

  test('Returns errors in right format on failure', async () => {
    server.use(
      rest.get('*', (req, res, ctx) => {
        return res(ctx.status(500));
      }),
    );

    const { result } = renderHook(() => useTestBreeds(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(result.current.error).toBeDefined();
  });
});
