import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDescriptionElement
 * @class IconBaselineDescriptionElement
 * @extends {AoflElement}
 */
class IconBaselineDescriptionElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDescriptionElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-description';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDescriptionElement.is, IconBaselineDescriptionElement);

export default IconBaselineDescriptionElement;
