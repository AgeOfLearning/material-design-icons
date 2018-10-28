import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCheckElement
 * @class IconBaselineCheckElement
 * @extends {AoflElement}
 */
class IconBaselineCheckElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCheckElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-check';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCheckElement.is, IconBaselineCheckElement);

export default IconBaselineCheckElement;
