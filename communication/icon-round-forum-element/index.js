import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundForumElement
 * @class IconRoundForumElement
 * @extends {AoflElement}
 */
class IconRoundForumElement extends AoflElement {
  /**
   * Creates an instance of IconRoundForumElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-forum';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundForumElement.is, IconRoundForumElement);

export default IconRoundForumElement;
