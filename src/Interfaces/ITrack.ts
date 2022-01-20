import {IArtist} from "./IArtist";
import {IAlbum} from "./iAlbum";

export interface ITrack {
  id: number;
  title: string;
  link: string;
  duration: number;
  track_position: string;
  preview: string;
  rank:number;
  release_date:string;
  contributors:IArtist[];
  artist:IArtist;
  album:IAlbum;
  md5_image:string;


}
