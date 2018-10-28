import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineWorkOffElement
 * @class IconBaselineWorkOffElement
 * @extends {AoflElement}
 */
class IconBaselineWorkOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineWorkOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-work-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineWorkOffElement.is, IconBaselineWorkOffElement);

export default IconBaselineWorkOffElement;
