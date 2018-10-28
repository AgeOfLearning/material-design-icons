import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneNewReleasesElement
 * @class IconTwotoneNewReleasesElement
 * @extends {AoflElement}
 */
class IconTwotoneNewReleasesElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneNewReleasesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-new-releases';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneNewReleasesElement.is, IconTwotoneNewReleasesElement);

export default IconTwotoneNewReleasesElement;
