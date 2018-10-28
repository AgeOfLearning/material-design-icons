import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpNewReleasesElement
 * @class IconSharpNewReleasesElement
 * @extends {AoflElement}
 */
class IconSharpNewReleasesElement extends AoflElement {
  /**
   * Creates an instance of IconSharpNewReleasesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-new-releases';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpNewReleasesElement.is, IconSharpNewReleasesElement);

export default IconSharpNewReleasesElement;
