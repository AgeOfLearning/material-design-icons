import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineQueueMusicElement
 * @class IconBaselineQueueMusicElement
 * @extends {AoflElement}
 */
class IconBaselineQueueMusicElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineQueueMusicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-queue-music';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineQueueMusicElement.is, IconBaselineQueueMusicElement);

export default IconBaselineQueueMusicElement;
