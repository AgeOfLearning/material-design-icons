import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAddBoxElement
 * @class IconBaselineAddBoxElement
 * @extends {AoflElement}
 */
class IconBaselineAddBoxElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAddBoxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-add-box';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAddBoxElement.is, IconBaselineAddBoxElement);

export default IconBaselineAddBoxElement;
