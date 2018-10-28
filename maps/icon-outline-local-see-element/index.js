import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocalSeeElement
 * @class IconOutlineLocalSeeElement
 * @extends {AoflElement}
 */
class IconOutlineLocalSeeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocalSeeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-local-see';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocalSeeElement.is, IconOutlineLocalSeeElement);

export default IconOutlineLocalSeeElement;
