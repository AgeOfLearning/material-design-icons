import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSupervisedUserCircleElement
 * @class IconRoundSupervisedUserCircleElement
 * @extends {AoflElement}
 */
class IconRoundSupervisedUserCircleElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSupervisedUserCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-supervised-user-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSupervisedUserCircleElement.is, IconRoundSupervisedUserCircleElement);

export default IconRoundSupervisedUserCircleElement;
