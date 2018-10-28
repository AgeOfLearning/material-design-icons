import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPublishElement
 * @class IconSharpPublishElement
 * @extends {AoflElement}
 */
class IconSharpPublishElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPublishElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-publish';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPublishElement.is, IconSharpPublishElement);

export default IconSharpPublishElement;
