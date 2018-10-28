import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundHistoryElement
 * @class IconRoundHistoryElement
 * @extends {AoflElement}
 */
class IconRoundHistoryElement extends AoflElement {
  /**
   * Creates an instance of IconRoundHistoryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-history';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundHistoryElement.is, IconRoundHistoryElement);

export default IconRoundHistoryElement;
