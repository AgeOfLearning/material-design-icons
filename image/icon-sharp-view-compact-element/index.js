import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpViewCompactElement
 * @class IconSharpViewCompactElement
 * @extends {AoflElement}
 */
class IconSharpViewCompactElement extends AoflElement {
  /**
   * Creates an instance of IconSharpViewCompactElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-view-compact';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpViewCompactElement.is, IconSharpViewCompactElement);

export default IconSharpViewCompactElement;
