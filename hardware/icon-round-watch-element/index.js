import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundWatchElement
 * @class IconRoundWatchElement
 * @extends {AoflElement}
 */
class IconRoundWatchElement extends AoflElement {
  /**
   * Creates an instance of IconRoundWatchElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-watch';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundWatchElement.is, IconRoundWatchElement);

export default IconRoundWatchElement;
