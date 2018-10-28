import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBusinessCenterElement
 * @class IconBaselineBusinessCenterElement
 * @extends {AoflElement}
 */
class IconBaselineBusinessCenterElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBusinessCenterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-business-center';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBusinessCenterElement.is, IconBaselineBusinessCenterElement);

export default IconBaselineBusinessCenterElement;
