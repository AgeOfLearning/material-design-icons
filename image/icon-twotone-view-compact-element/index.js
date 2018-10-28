import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneViewCompactElement
 * @class IconTwotoneViewCompactElement
 * @extends {AoflElement}
 */
class IconTwotoneViewCompactElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneViewCompactElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-view-compact';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneViewCompactElement.is, IconTwotoneViewCompactElement);

export default IconTwotoneViewCompactElement;
