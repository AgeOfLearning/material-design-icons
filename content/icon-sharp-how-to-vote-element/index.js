import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpHowToVoteElement
 * @class IconSharpHowToVoteElement
 * @extends {AoflElement}
 */
class IconSharpHowToVoteElement extends AoflElement {
  /**
   * Creates an instance of IconSharpHowToVoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-how-to-vote';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpHowToVoteElement.is, IconSharpHowToVoteElement);

export default IconSharpHowToVoteElement;
