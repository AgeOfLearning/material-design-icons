import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundQueueMusicElement
 * @class IconRoundQueueMusicElement
 * @extends {AoflElement}
 */
class IconRoundQueueMusicElement extends AoflElement {
  /**
   * Creates an instance of IconRoundQueueMusicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-queue-music';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundQueueMusicElement.is, IconRoundQueueMusicElement);

export default IconRoundQueueMusicElement;
