import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineOpenWithElement
 * @class IconBaselineOpenWithElement
 * @extends {AoflElement}
 */
class IconBaselineOpenWithElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineOpenWithElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-open-with';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineOpenWithElement.is, IconBaselineOpenWithElement);

export default IconBaselineOpenWithElement;
