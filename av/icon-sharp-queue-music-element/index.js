import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpQueueMusicElement
 * @class IconSharpQueueMusicElement
 * @extends {AoflElement}
 */
class IconSharpQueueMusicElement extends AoflElement {
  /**
   * Creates an instance of IconSharpQueueMusicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-queue-music';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpQueueMusicElement.is, IconSharpQueueMusicElement);

export default IconSharpQueueMusicElement;
