import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineContactMailElement
 * @class IconBaselineContactMailElement
 * @extends {AoflElement}
 */
class IconBaselineContactMailElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineContactMailElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-contact-mail';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineContactMailElement.is, IconBaselineContactMailElement);

export default IconBaselineContactMailElement;
