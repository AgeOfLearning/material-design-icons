import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineChangeHistoryElement
 * @class IconBaselineChangeHistoryElement
 * @extends {AoflElement}
 */
class IconBaselineChangeHistoryElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineChangeHistoryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-change-history';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineChangeHistoryElement.is, IconBaselineChangeHistoryElement);

export default IconBaselineChangeHistoryElement;
