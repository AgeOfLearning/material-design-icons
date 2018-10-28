import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineHttpElement
 * @class IconBaselineHttpElement
 * @extends {AoflElement}
 */
class IconBaselineHttpElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineHttpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-http';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineHttpElement.is, IconBaselineHttpElement);

export default IconBaselineHttpElement;
