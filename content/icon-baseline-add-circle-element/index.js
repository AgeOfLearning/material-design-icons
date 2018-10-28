import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAddCircleElement
 * @class IconBaselineAddCircleElement
 * @extends {AoflElement}
 */
class IconBaselineAddCircleElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAddCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-add-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAddCircleElement.is, IconBaselineAddCircleElement);

export default IconBaselineAddCircleElement;
