import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundChangeHistoryElement
 * @class IconRoundChangeHistoryElement
 * @extends {AoflElement}
 */
class IconRoundChangeHistoryElement extends AoflElement {
  /**
   * Creates an instance of IconRoundChangeHistoryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-change-history';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundChangeHistoryElement.is, IconRoundChangeHistoryElement);

export default IconRoundChangeHistoryElement;
