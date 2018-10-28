import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineNatureElement
 * @class IconBaselineNatureElement
 * @extends {AoflElement}
 */
class IconBaselineNatureElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineNatureElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-nature';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineNatureElement.is, IconBaselineNatureElement);

export default IconBaselineNatureElement;
