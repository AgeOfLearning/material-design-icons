import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocalPostOfficeElement
 * @class IconRoundLocalPostOfficeElement
 * @extends {AoflElement}
 */
class IconRoundLocalPostOfficeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocalPostOfficeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-local-post-office';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocalPostOfficeElement.is, IconRoundLocalPostOfficeElement);

export default IconRoundLocalPostOfficeElement;
