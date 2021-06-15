import {render, screen} from "@testing-library/react";
import { ActiveLink } from ".";

jest.mock("next/router", () =>  {
  return{
    useRouter(){
      return{
        asPath: '/'
      }
    }
  }
});

describe('ActiveLink Component', ()=> {
  it('should renders correctly', () => {
    render(
      <ActiveLink activeClassName="active" href="/" >
        <a>Home</a>
      </ActiveLink>
    );
  
    expect(screen.getByText('Home')).toBeInTheDocument()
  });
  
  test('should recieve active class', () => {
    render(
      <ActiveLink activeClassName="active" href="/" >
        <a>Home</a>
      </ActiveLink>
    );
  
    expect(screen.getByText('Home')).toHaveClass('active')
  });

})
