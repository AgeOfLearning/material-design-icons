import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneQueueMusicElement
 * @class IconTwotoneQueueMusicElement
 * @extends {AoflElement}
 */
class IconTwotoneQueueMusicElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneQueueMusicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-queue-music';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneQueueMusicElement.is, IconTwotoneQueueMusicElement);

export default IconTwotoneQueueMusicElement;
