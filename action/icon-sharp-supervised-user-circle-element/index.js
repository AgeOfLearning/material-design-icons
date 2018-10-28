import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSupervisedUserCircleElement
 * @class IconSharpSupervisedUserCircleElement
 * @extends {AoflElement}
 */
class IconSharpSupervisedUserCircleElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSupervisedUserCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-supervised-user-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSupervisedUserCircleElement.is, IconSharpSupervisedUserCircleElement);

export default IconSharpSupervisedUserCircleElement;
