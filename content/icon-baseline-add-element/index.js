import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAddElement
 * @class IconBaselineAddElement
 * @extends {AoflElement}
 */
class IconBaselineAddElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAddElement.is, IconBaselineAddElement);

export default IconBaselineAddElement;
