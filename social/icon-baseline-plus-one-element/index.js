import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePlusOneElement
 * @class IconBaselinePlusOneElement
 * @extends {AoflElement}
 */
class IconBaselinePlusOneElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePlusOneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-plus-one';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePlusOneElement.is, IconBaselinePlusOneElement);

export default IconBaselinePlusOneElement;
