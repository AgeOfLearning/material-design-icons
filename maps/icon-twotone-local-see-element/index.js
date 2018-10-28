import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocalSeeElement
 * @class IconTwotoneLocalSeeElement
 * @extends {AoflElement}
 */
class IconTwotoneLocalSeeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocalSeeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-local-see';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocalSeeElement.is, IconTwotoneLocalSeeElement);

export default IconTwotoneLocalSeeElement;
