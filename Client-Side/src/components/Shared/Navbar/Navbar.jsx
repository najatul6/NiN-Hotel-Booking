import Container from "../Container";
import DropDown from "./DropDown";
import Logo from "../Logo/Logo";

const Navbar = () => {
    return (
        <div className='fixed w-full bg-white z-10 shadow-sm'>
        <div className='py-4 border-b-[1px]'>
          <Container>
            <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
              {/* Logo */}
              <Logo/>
              {/* Dropdown Menu */}
              <DropDown />
            </div>
          </Container>
        </div>
      </div>
    );
};

export default Navbar;