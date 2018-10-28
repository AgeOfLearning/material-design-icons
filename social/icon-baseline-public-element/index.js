import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePublicElement
 * @class IconBaselinePublicElement
 * @extends {AoflElement}
 */
class IconBaselinePublicElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePublicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-public';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePublicElement.is, IconBaselinePublicElement);

export default IconBaselinePublicElement;
