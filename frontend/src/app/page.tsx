import {Button} from "@/components/ui/button";

const Home = () => {
    return (
        <>
            <Button>Click me</Button>
            <div className="selection:bg-green-600 selection:text-white">
                <p>
                    So I started to walk into the water. I won't lie to you boys, I was
                    terrified. But I pressed on, and as I made my way past the breakers a
                    strange calm came over me. I don't know if it was divine intervention
                    or the kinship of all living things but I tell you Jerry at that
                    moment, I <em>was</em> a marine biologist.
                </p>
            </div>
        </>
    );
};

export default Home;
