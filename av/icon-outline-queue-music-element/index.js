import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineQueueMusicElement
 * @class IconOutlineQueueMusicElement
 * @extends {AoflElement}
 */
class IconOutlineQueueMusicElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineQueueMusicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-queue-music';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineQueueMusicElement.is, IconOutlineQueueMusicElement);

export default IconOutlineQueueMusicElement;
