import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineForwardElement
 * @class IconBaselineForwardElement
 * @extends {AoflElement}
 */
class IconBaselineForwardElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineForwardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-forward';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineForwardElement.is, IconBaselineForwardElement);

export default IconBaselineForwardElement;
