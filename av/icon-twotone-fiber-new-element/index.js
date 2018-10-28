import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFiberNewElement
 * @class IconTwotoneFiberNewElement
 * @extends {AoflElement}
 */
class IconTwotoneFiberNewElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFiberNewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-fiber-new';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFiberNewElement.is, IconTwotoneFiberNewElement);

export default IconTwotoneFiberNewElement;
