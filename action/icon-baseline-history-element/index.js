import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineHistoryElement
 * @class IconBaselineHistoryElement
 * @extends {AoflElement}
 */
class IconBaselineHistoryElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineHistoryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-history';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineHistoryElement.is, IconBaselineHistoryElement);

export default IconBaselineHistoryElement;
