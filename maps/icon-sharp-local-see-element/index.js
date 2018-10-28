import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocalSeeElement
 * @class IconSharpLocalSeeElement
 * @extends {AoflElement}
 */
class IconSharpLocalSeeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocalSeeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-local-see';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocalSeeElement.is, IconSharpLocalSeeElement);

export default IconSharpLocalSeeElement;
