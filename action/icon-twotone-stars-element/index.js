import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneStarsElement
 * @class IconTwotoneStarsElement
 * @extends {AoflElement}
 */
class IconTwotoneStarsElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneStarsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-stars';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneStarsElement.is, IconTwotoneStarsElement);

export default IconTwotoneStarsElement;
