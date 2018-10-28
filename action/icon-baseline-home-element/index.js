import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineHomeElement
 * @class IconBaselineHomeElement
 * @extends {AoflElement}
 */
class IconBaselineHomeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineHomeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-home';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineHomeElement.is, IconBaselineHomeElement);

export default IconBaselineHomeElement;
