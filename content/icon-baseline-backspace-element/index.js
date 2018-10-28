import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBackspaceElement
 * @class IconBaselineBackspaceElement
 * @extends {AoflElement}
 */
class IconBaselineBackspaceElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBackspaceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-backspace';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBackspaceElement.is, IconBaselineBackspaceElement);

export default IconBaselineBackspaceElement;
