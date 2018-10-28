import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineNewReleasesElement
 * @class IconOutlineNewReleasesElement
 * @extends {AoflElement}
 */
class IconOutlineNewReleasesElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineNewReleasesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-new-releases';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineNewReleasesElement.is, IconOutlineNewReleasesElement);

export default IconOutlineNewReleasesElement;
