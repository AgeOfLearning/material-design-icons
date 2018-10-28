import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineForward5Element
 * @class IconBaselineForward5Element
 * @extends {AoflElement}
 */
class IconBaselineForward5Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineForward5Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-forward-5';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineForward5Element.is, IconBaselineForward5Element);

export default IconBaselineForward5Element;
