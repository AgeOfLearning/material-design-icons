import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineEmailElement
 * @class IconBaselineEmailElement
 * @extends {AoflElement}
 */
class IconBaselineEmailElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineEmailElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-email';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineEmailElement.is, IconBaselineEmailElement);

export default IconBaselineEmailElement;
