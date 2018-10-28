import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundWatchLaterElement
 * @class IconRoundWatchLaterElement
 * @extends {AoflElement}
 */
class IconRoundWatchLaterElement extends AoflElement {
  /**
   * Creates an instance of IconRoundWatchLaterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-watch-later';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundWatchLaterElement.is, IconRoundWatchLaterElement);

export default IconRoundWatchLaterElement;
