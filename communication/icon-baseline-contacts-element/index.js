import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineContactsElement
 * @class IconBaselineContactsElement
 * @extends {AoflElement}
 */
class IconBaselineContactsElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineContactsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-contacts';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineContactsElement.is, IconBaselineContactsElement);

export default IconBaselineContactsElement;
