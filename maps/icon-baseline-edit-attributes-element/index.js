import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineEditAttributesElement
 * @class IconBaselineEditAttributesElement
 * @extends {AoflElement}
 */
class IconBaselineEditAttributesElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineEditAttributesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-edit-attributes';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineEditAttributesElement.is, IconBaselineEditAttributesElement);

export default IconBaselineEditAttributesElement;
