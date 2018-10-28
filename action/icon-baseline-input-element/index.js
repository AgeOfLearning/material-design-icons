import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineInputElement
 * @class IconBaselineInputElement
 * @extends {AoflElement}
 */
class IconBaselineInputElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineInputElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-input';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineInputElement.is, IconBaselineInputElement);

export default IconBaselineInputElement;
